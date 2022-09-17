interface MyObject {
  [key: string]: string;
}

interface ArrayInput {
  number: string;
}

// interface Seven {
//   7: string;
// }

export function useUniqueKeys(
  arr1: Array<ArrayInput>,
  arr2: Array<ArrayInput>
) {
  const myObj: MyObject = {};
  const transactions = [...arr1, ...arr2];

  transactions.forEach((transaction) => {
    const { number } = transaction;
    if (!myObj[number]) {
      myObj[number] = number + 10;
    }
  });

  return myObj;
}
