import { Avatar, Card } from 'antd'
const { Meta } = Card
const PostItem = props => {
	debugger

	return (
		<>
			<Card
				style={{
					marginTop: 16,
					borderColor: '#001529',
				}}
			>
				<Meta
					avatar={<Avatar src={props.profile.photos.small} />}
					title={props.profile.fullName}
					description={props.message}
				/>
			</Card>
		</>
	)
}
export default PostItem
