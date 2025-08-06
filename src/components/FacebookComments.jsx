import { useEffect } from "react";

function FacebookComments() {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse(); // re-render FB widgets after DOM update
    }
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">💬 Comments</h2>
      <div 
        className="fb-comments"
       // data-href="http://localhost:5173/"
        data-href="https://sohelllkhan.github.io/my-project/" 
        data-width="100%"
        data-numposts="5"
      ></div>
    </div>
  );
}

export default FacebookComments;
