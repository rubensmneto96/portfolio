export default function Footer() {
    return (
        <footer className="w-full z-100 py-6 z-40 bg-background/80 backdrop-blur-md shadow-xs">
            <div className="container flex flex-wrap justify-center">
                <p> &copy; {new Date().getFullYear()} Rubens Mreis Neto. Todos os direitos reservados.</p>
                <div className="flex flex-wrap px-8">
                    <p className="text-lg md:text-md px-2">Made with </p>
                    <img width="32" height="32" src="/nextjs-light-icon.svg" alt="NextJS logo" />
                    <span className="text-lg md:text-md px-2"> + </span>
                    <img width="32" height="32" src="/react.svg" alt="ReactJS logo" />
                </div>
            </div>
        </footer>
    )
}