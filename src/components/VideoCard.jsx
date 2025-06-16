import { getDiffTimeText } from "../utils/helper";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Eye, Clock } from "lucide-react";

const VideoCard = ({ video }) => {
  const { title, thumbnail, owner, views, createdAt } = video;

  const diffTimeText = getDiffTimeText(createdAt);

  return (
    <Link to={"/watch?v=" + video._id}>
      <Card className="overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
        <div className="overflow-hidden rounded-t-lg">
          <img
            className="rounded-t-lg object-cover w-full h-48 transition-transform hover:scale-105"
            alt="thumbnail"
            src={thumbnail?.url}
          />
        </div>
        <CardContent className="pt-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src={owner?.avatar?.url} alt={owner?.username} />
              <AvatarFallback>{owner?.username?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold line-clamp-2">
                {String(title).length < 61
                  ? title
                  : String(title).substring(0, 58) + "..."}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                {owner?.username}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between text-xs text-muted-foreground pt-0">
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            <span>{views} views</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{diffTimeText}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default VideoCard;
