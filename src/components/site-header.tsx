import { profile } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="header">
      <a href="#top" className="header-identity">
        <img
          src="/ashad.jpg"
          alt="Portrait of Ashad Khuman"
          width={50}
          height={50}
          className="avatar-photo"
        />
        <div>
          <h1 className="header-name">{profile.name}</h1>
          <p className="header-role">{profile.role}</p>
        </div>
      </a>
      <p className="status">
        <span className="status-dot" aria-hidden="true" />
        {profile.status}
      </p>
    </header>
  );
}
