import styles from '../app/Home.module.css';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    debugger;
    return res.json();
}

export default async function Gallery() {
    let counter = 0;
    return new Promise((resolve) => {
        setTimeout(async () => {
            const data = await getData();
            resolve(
                <div>
                    <h1>Gallery</h1>
                    {data.map((post) => {
                        if (counter >= 8) {
                            return null; // Skip rendering additional elements
                        }

                        counter++;

                        return (
                            <img
                                key={post.id}
                                src={post.thumbnailUrl}
                                alt={`Image ${post.id}`}
                                className={styles.image}
                            />
                        );
                    })}
                </div>
            );
        }, 2000); // Simulating a 2-second delay
    });
}
