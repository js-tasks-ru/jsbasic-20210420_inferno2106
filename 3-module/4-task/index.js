function showSalary(users, age) {
        let filtered = users
          .filter((item) => item.age <= age)
          .map((item) => `${item.name}, ${item.balance}`)
          .join("\n");
        return filtered;
}
