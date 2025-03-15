export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            <div className="flex justify-center items-center h-screen w-full bg-gray-100">
                <div className="bg-white p-8 rounded-xl shadow-md w-full h-full">
                    {children}
                </div>
            </div>
        </div>

    );
}
