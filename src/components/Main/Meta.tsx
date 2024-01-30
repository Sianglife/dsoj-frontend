import metadata from "@/app/metadata"

export default function Meta() {
    return (
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href={metadata.icon} />
        </head>
    )
}