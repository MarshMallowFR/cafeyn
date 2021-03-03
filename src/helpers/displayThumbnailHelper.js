import Thumbnail from "../components/thumbnail/Thumbnail";

export const displayThumbnail = (data) => data.map((d) => <Thumbnail {...d} />);
