import { createClient } from 'contentful'
import Cards from '../cards';

// export default async (req, res) => {
//     if (req.method === "POST") {

//         const client = contentful.createClient({
//             // space: process.env.CONTENTFUL_SPACE_ID,
//             accessToken: process.env.CONTENTFUL_API_KEY,
//         });

//         console.log(req.body)

//         const res = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
//             .then((space) => space.getEnvironment('master'))
//             .then((environment) => environment.createEntry('cards', {
//                 fields: req.body
//             }))
//             .then((entry) => console.log(entry))
//             .catch(console.error)
//     } else {
//         res.setHeader("Allow", ["POST"]);
//         res.status(405).end(`Method ${method} Not Allowed`);
//     }

//     // console.log(req.body);
//     // if (req.method === "POST") {
//     //     fetch(`https://api.contentful.com/spaces/{ space_id } /environments/{ environment_id } /entries`), {
//     //         method: "POST",
//     //         headers: {
//     //             "Content-Type": "application/json",
//     //             Authorization: `Token ${process.env.CONTENTFUL_API_KEY}`,
//     //         },
//     //         body: JSON.stringify(req.body),
//     //     }
//     // }
// }

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
                            title: {"en-US": req.body.title},
                            receiver: { "en-US": req.body.receiver},
                            sender: { "en-US":req.body.sender},
                            message: { "en-US":req.body.message}
                    } }),
                }
            );
            console.log(response);
            if (response.status === 201) {
                res.status(200).json({ succeeded: true, response: response.json() });
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