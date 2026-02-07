import AuthenticatedLayoutAdmin from "@/Layouts/AutheticateLayoutAdmin";
import Table from "./components/Table";
import { Head } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";

export default function WelcomeAdmin({ usuarios }) {
    return (
        <AuthenticatedLayoutAdmin>
            <Head title="Admin principal" />

            <div className="container mx-auto px-4 py-4 ">
                <PrimaryButton className="mb-2">Agregar usuario</PrimaryButton>
                <Table data={usuarios} />
            </div>
        </AuthenticatedLayoutAdmin>
    );
}
