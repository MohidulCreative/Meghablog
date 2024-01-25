import { Link, useLocation } from "react-router-dom";
import appwriteService from "../appwrite/config";

const PostCart = ({ $id, title, featuredImage }) => {
  const location = useLocation();

  // Check the current route and generate the appropriate link
  const getLinkPath = () => {
    if (location.pathname === "/") {
      return `post/${$id}`;
    } else if (location.pathname === "/all-posts") {
      return `${$id}`;
    }
    // Add more conditions if needed
    return ""; // Default case, can be adjusted based on your requirements
  };

  return (
    <Link to={getLinkPath()}>
      <div className="bg-gray-100 w-full rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            className="rounded-xl"
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCart;