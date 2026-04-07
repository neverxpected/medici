export default function SchemaOrg() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Your Business Name',
        url: 'https://medici-zeta.vercel.app',
        description: 'One clear sentence about what you do.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Your City',
            addressRegion: 'TX',
            addressCountry: 'US',
        },
    }
    return (
        <script type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
