import { Link } from "@inertiajs/react";

export default function Table({ data }) {
    return (
        <div className=" relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                    <tr>
                        <th scope="col" className="px-6 py-3 font-medium">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 font-medium text-center"
                        >
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr
                            key={user.id}
                            className="bg-neutral-primary border-b border-default hover:bg-gray-50 transition-colors"
                        >
                            <td className="px-6 py-4 font-medium text-heading">
                                {user.id}
                            </td>
                            <td className="px-6 py-4">{user.name}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4 flex justify-center gap-2">
                                {/* Botón Editar */}
                                <Link
                                    href={`/admin/users/${user.id}/edit`}
                                    className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-xs font-semibold"
                                >
                                    Editar
                                </Link>

                                {/* Botón Eliminar */}
                                <button
                                    onClick={() => {
                                        if (
                                            confirm(
                                                "¿Estás seguro de eliminar este usuario?"
                                            )
                                        ) {
                                            // Aquí iría tu lógica de eliminación con Inertia.router.delete
                                        }
                                    }}
                                    className="px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-xs font-semibold"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}

                    {data.length === 0 && (
                        <tr>
                            <td
                                colSpan="4"
                                className="px-6 py-10 text-center text-gray-500"
                            >
                                No hay usuarios registrados.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
