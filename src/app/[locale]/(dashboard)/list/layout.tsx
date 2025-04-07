export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            <div className="flex justify-center items-center h-full w-full">
                <div className="bg-white md:p-4 p-0 rounded-xl shadow-md w-full">
                    {children}
                </div>
            </div>
        </div>

    );
}
