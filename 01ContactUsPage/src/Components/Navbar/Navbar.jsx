import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/5f58/2a30/fd63de4356dc476c037adbb202ffa6fe?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVKjcXfLFJJGrI9-SIBnwvtxC~AoTcSfw5bEBzw9MDtyNjcld2DYGf6H8-3ABNjW4XvEpb6okLmzDl7RSm01FKLIvsGA0QJRkSZPkrFKqk6GPMfwzyLQrvY7sazDHGbXhxZW4UTg-K5Vk4TFNovKViEUb6zFAvxxh2f4yh7UkQk8TOe6b~Kw-5-EDRyq1JresLy3~uAQSrnq7Jj3~eqpumJYBhO6VQaN-AMoHTulWdkEMfWGznLt6-AKsDOMbthS58AEd6263nKxq0fHMnSjHGSrQS2akFY9SdJK36M5XVMCdo626AhAI9Kyba2Y3ennLldCP08Og0vSgJuPiZCGog__" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>contact </li>
      </ul>
    </nav>
  );
};

export default Navbar;
