const Layout = ({ children }: { children: React.ReactNode} ) => {
    return (
        <div className="w-full min-h-screen bg-center bg-cover flex-center bg-primary-50 bg-dotted-pattern">
            {children}
        </div>
    );

}

export default Layout;