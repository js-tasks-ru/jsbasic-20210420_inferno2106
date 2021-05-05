function showSalary(users, age) {
  // let str = "";
        let filtered = users
          .filter((item) => item.age <= age)
          .map((item) => `${item.name}, ${item.balance}`)
          .join("\n");
        // filtered.forEach((item, index, arr) => {
        //   if (index === arr.length - 1)
        //     return (str += `${item.name}, ${item.balance}`);
        //   str += `${item.name}, ${item.balance}\n`;
        // });
        return filtered;
}
