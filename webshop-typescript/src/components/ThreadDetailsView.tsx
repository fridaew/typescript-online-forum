import { useParams } from "react-router-dom";

interface ThreadDetailsProps {
  title: string;
  description: string;
}

const ThreadDetailsView = () => {
  // const ThreadDetailsView: React.FC<ThreadDetailsProps> = ({ title, description }) => {

const { id } = useParams()

  return (
    <div>
      <h5>{id}</h5>
      {/* <h5>{title}</h5>
      <p>{description}</p> */}
    </div>
  );
};

export default ThreadDetailsView;