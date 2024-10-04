import Link from "next/link"

export default function EventsLayout({ children }: any) {
    return (
        <div>
            <Link href={"/"}>Home</Link>
            <section>
                {children}
            </section>
        </div>
    )
}