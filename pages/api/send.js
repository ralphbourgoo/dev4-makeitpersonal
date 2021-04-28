import { createClient } from 'contentful'

export default async (req, res) => {
    if (req.method === "POST") {
        try {
            const response = await fetch(
                `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/vnd.contentful.management.v1+json",
                        "X-Contentful-Content-Type": "cards",
                        Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
                    },
                    body: JSON.stringify({
                        fields: {
                            title: { "en-US": req.body.title },
                            receiver: { "en-US": req.body.receiver },
                            sender: { "en-US": req.body.sender },
                            message: { "en-US": req.body.message },
                            slug: { "en-US": req.body.slug },
                            //image: { "en-US": req.body.image }
                        }
                    }),
                }
            );
            if (response.status === 201) {
                const data = await response.json();
                handlePublishing(data.sys.id).then(() => {
                    res.status(200).json({ succeeded: true });
                });
            } else {
                const result = await response.json();
                console.log(result, result.details.errors[0])
                let reason = "onbekend";
                if (result.detail) {
                    reason = result.detail;
                }
                if (Array.isArray(result)) {
                    reason = result.join();
                }
                res.status(200).json({ succeeded: false, reason });
            }
        } catch (e) {
            res.status(500).end(`Something went wrong: ${e}`);
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
};

const handlePublishing = async (entry_id) => {
    const publish = await fetch(
        `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/${entry_id}/published`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/vnd.contentful.management.v1+json",
                "X-Contentful-Content-Type": "cards",
                "X-Contentful-Version": 1,
                Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
            },
        }
    );

    const data = await publish.json();
    console.log('publish data', data);
}