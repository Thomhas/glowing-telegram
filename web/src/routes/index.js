import { client } from '../components/SanityClient';

export async function GET() {
	const data = await client.fetch(`*[_type == "post"]`);

	if (data) {
		return {
			status: 200,
			body: {
				posts: data
			}
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
