
import { Avatar, Card} from 'antd';
const { Meta } = Card;
const PostItem = (props) => {
  debugger

  return (
    <>
      <Card
        style={{
          width: 500,
          marginTop: 16,
        }}
      >
        <Meta
          avatar={<Avatar src={props.profile.photos.small} />}
          title={props.profile.fullName}
          description={props.message}
        />
      </Card>
    </>
  );
 };
 export default PostItem;

