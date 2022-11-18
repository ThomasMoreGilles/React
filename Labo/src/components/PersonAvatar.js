import Avatar from "boring-avatars";

export function PersonAvatar(props) {
    const { person } = props;
    if (!person) return;

    return <Avatar size="50" name={person.id} variant="beam" />;
}