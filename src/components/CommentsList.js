import 'remixicon/fonts/remixicon.css';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function CommentsList() {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const data = await getData();
      resolve(
        <div>
          <h1>Customer Reviews</h1>
          <div className="wrapper">
            <div className="comment">
              <div>
                {data.map((comment) => (
                  <>
                    <div className="content">
                      <div className="avatar">
                        <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" />
                      </div>
                      <div className="content-comment">
                        <div className="user">
                          <p className="username">{comment.email}</p>
                          <span className="is-mute">17 SEP 2020</span>
                        </div>
                        <p>
                          {comment.body}
                        </p>
                        <div className="content-footer">
                          <button className="btn btn-outline">
                            <i className="ri-share-forward-fill" />
                            Reply
                          </button>
                          <button className="btn">
                            <i className="ri-more-fill" />
                          </button>
                        </div>
                      </div>
                      <div className="rate">
                        <button className="btn">
                          <i className="ri-arrow-down-s-line" />
                        </button>
                        <div className="value green">7</div>
                        <button className="btn">
                          <i className="ri-arrow-up-s-line" />
                        </button>
                      </div>
                    </div>
                  </>
                ))}
                <div className="footer" />
              </div>
            </div>
          </div>

        </div>
      );
    }, 4000); // Simulating a 4-second delay
  });
}
