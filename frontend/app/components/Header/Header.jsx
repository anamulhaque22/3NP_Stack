import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
        <li>
          <Link href="/employeelist">Employee List</Link>
        </li>
        <li>
          <Link href="/eventlist">Event List</Link>
        </li>
        <li>
          <Link href="/attendeelist">Attendee List</Link>
        </li>
        <li>
          <Link href="/eventorganizerlist">Event Organizer List</Link>
        </li>
        <li>
          <Link href="/attendeelist">Attendee List</Link>
        </li>
        <li>
          <Link href="/update-profile">Update Profile</Link>
        </li>
        <li>
          <Link href="/blog">Blogs</Link>
        </li>
        <li>
          <Link href="/rendercount">Render Count</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
