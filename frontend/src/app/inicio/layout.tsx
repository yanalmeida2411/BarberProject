import AsideAdmin from "@/components/AsideAdmin";
import AsideBarber from "@/components/AsideBarber";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <AsideBarber />
            <main>
                {children}
            </main>
        </div>
    );
}