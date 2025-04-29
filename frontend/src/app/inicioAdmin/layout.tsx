import AsideAdmin from "@/components/AsideAdmin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <AsideAdmin />
            <main>
                {children}
            </main>
        </div>
    );
}