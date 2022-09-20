# Rating App

- [About 📄](#about-📄)
- [Best practices 🤩](#best-practices-🤩)
- [Git Patterns 😻](#git-patterns-😻)
- [Tests](#tests-🧪)

## About-📄

---

A Simple React Native App using Typescript and React Context

## Best Practices 🤩

---

- In this application we are following the airbnb guideline

## Git Patterns 😻

---

In this application was used some good practices from `gitFlow`

### Opening branches

- `[feature/fix/hotfix]/{task-name}`

  - `feature`: Reserved for the development of new features, or continuing old features;
  - `hotfix`: reserved for fixing problems of already merged master branches;
  - `fix`: reserved for fixing code problems like a refactor.

### Types of commit messages

- feat: A new feature
- fix: A bug fix
- refactor: A code change that neither fixes a bug nor adds a feature
- test: Adding missing or correcting existing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

example:

```
[feat]: user-form(new user field)
```

## Tests 🧪

---

- In this application we have unit and integration tests
  - In this application, the unit tests are used on components folder, like:
    - Screen/
      - index.tsx
      - screen.styles.tsx
      - **screen.test.tsx**
  - In this application, the integration tests are used on feature folder
    - Home/
      - components/
      - index.tsx
      - **home.test.tsx**
      - home.hook.ts
      - home.styles.ts
