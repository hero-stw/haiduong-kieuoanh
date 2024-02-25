import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';

interface RSVP {
	id: number;
	guest_name: string;
	partner_name?: string;
	rsvp: 'yes' | 'no';
	createdAt: number;
	email: string
}

const RSVPList: React.FC = () => {
	const [rsvps, setRsvps] = useState<RSVP[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null)
	const [showConfirmDialog, setShowConfirmDialog] = useState(false);
	const [deleteItemIndex, setDeleteItemIndex] = useState<number | null>(null);

	const deleteRSVP = async (id: number) => {
		try {
			const response = await fetch(`https://65cdc2d8c715428e8b3efe00.mockapi.io/anhthu-charlesbester/api/rsvp/${id}`, {
				method: 'DELETE',
			});
			if (response.status !== 200) {
				throw new Error(`Error deleting RSVP: ${response.statusText}`);
			}
			setRsvps(rsvps.filter((rsvp) => rsvp.id !== id));

			toast.success("Delete successfully", {
				theme: "colored",
				position: "bottom-right",
				autoClose: 2000,
			});
		} catch (error) {
			// @ts-ignore
			setError(error.message);
		}
	};

	const handleDeleteClick = (index: number) => {
		// Prevent unnecessary dialogs if item is already being deleted
		if (isLoading || showConfirmDialog) {
			return;
		}

		setDeleteItemIndex(index);
		setShowConfirmDialog(true);
	};

	const handleDialogClose = () => {
		setShowConfirmDialog(false);
		setDeleteItemIndex(null);
	};

	const handleDialogConfirm = async () => {
		if (deleteItemIndex !== null) {
			setIsLoading(true);
			try {
				await deleteRSVP(rsvps[deleteItemIndex].id);
			} finally {
				setShowConfirmDialog(false);
				setDeleteItemIndex(null);
				setIsLoading(false);
			}
		}
	};

	useEffect(() => {
		const fetchRsvps = async () => {
			try {
				const response = await fetch('https://65cdc2d8c715428e8b3efe00.mockapi.io/anhthu-charlesbester/api/rsvp');
				if (!response.ok) {
					throw new Error(`Error fetching RSVPs: ${response.statusText}`);
				}
				const data: RSVP[] = await response.json();
				setRsvps(data);
			} catch (error) {
				// @ts-ignore
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchRsvps();
	}, []);

	return (
		<>
			<h1 className={"text-center text-xl my-6 text-gray-700 font-bold"}>RSVP List</h1>
			{isLoading && <p>Loading RSVPs...</p>}
			{error && <p className="text-red-500">Error: {error}</p>}
			{showConfirmDialog && (
				<div className="dialog-overlay absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-500 p-6 rounded-xl">
					<div className="dialog-container">
						<p className={"text-white"}>Are you sure you want to delete this RSVP?</p>
						<div className={"flex gap-4 justify-center mt-5"}>
							<button className={"btn bg-gray-300 text-gray-800 border-none"} onClick={handleDialogClose}>Cancel</button>
							<button className={"btn bg-orange-300 text-gray-800 border-none"} onClick={handleDialogConfirm}>Delete</button>
						</div>
					</div>
				</div>
			)}
				<div className="overflow-x-auto mx-auto grid place-content-center text-gray-600">
					<table className="table table-xs">
						{/* head */}
						<thead className={"text-gray-600"}>
						<tr>
							<th></th>
							<th>Guest Name</th>
							<th>Partner Name</th>
							<th>RSVP</th>
							<th>Email</th>
							<th>Created At</th>
							<th></th>
						</tr>
						</thead>
						<tbody>
						{rsvps.length > 0 && rsvps.map((rsvp: RSVP, index: number) => {
							return (
								<tr key={rsvp.id}>
									<th>{index + 1}</th>
									<td>{rsvp.guest_name}</td>
									<td>{rsvp.partner_name}</td>
									<td>{rsvp.rsvp}</td>
									<td>{rsvp.email}</td>
									<td>{rsvp.createdAt}</td>
									<td>
										<button
											onClick={() => handleDeleteClick(index)}
											disabled={isLoading || showConfirmDialog && deleteItemIndex === index}
										>
											<svg
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"
													stroke="black"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</button>
									</td>
								</tr>
							)
						})}
						{rsvps.length === 0 && !isLoading && <tr><td colSpan={7}><p>No RSVPs found.</p></td></tr>}
						</tbody>
					</table>
				</div>

			<ToastContainer />
		</>
	)
}

export default RSVPList
