import Link from "next/link"

export default async function Page({ searchParams }: { searchParams: { [key: string]: string | string[] } }) {
    if (searchParams.event) {
        return (
            <p> event name: {searchParams.name}</p>
        )
    } else {
        const exists = true;

        if (exists) {
            // redirect
        } else {
            // 404
        }
    }

    return (
        <div>
            <p>Hello World from Event Page</p>

            <Link href={"/events/new"}>New Event</Link>
            <Link href={"/events/find"}>Find Event</Link>
        </div>
    )
}