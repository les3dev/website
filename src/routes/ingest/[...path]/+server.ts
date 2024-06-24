async function reverseProxy(request: Request) {
    const url = new URL(request.url);
    const hostname = url.pathname.startsWith('/ingest/static/') ? 'eu-assets.i.posthog.com' : 'eu.i.posthog.com';
    const requestHeaders = new Headers(request.headers);

    requestHeaders.set('host', hostname);
    requestHeaders.delete('connection');

    url.protocol = 'https';
    url.hostname = hostname;
    url.port = '443';
    url.pathname = url.pathname.replace(/^\/ingest/, '');

    const body = await request.arrayBuffer();
    return fetch(url.toString(), {
        body,
        method: request.method,
        headers: requestHeaders,
    });
}

export function POST({request}) {
    return reverseProxy(request);
}
