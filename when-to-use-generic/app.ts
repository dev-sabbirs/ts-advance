export interface Animal {
  name: string;
}
export interface Human {
  firstName: string;
  lastName: string;
}

// when we don't know the return type then we can use the generic type
export const getDisplayName = <TItem extends Animal | Human>(
  item: TItem
): TItem extends Animal
  ? { animalName: string }
  : { humanFirstName: string; humanLastName: string } => {
  if ("name" in item) {
    return {
      animalName: item.name,
    } as TItem extends Animal
      ? { animalName: string }
      : { humanFirstName: string; humanLastName: string };
  }
  return {
    humanFirstName: item.firstName,
    humanLastName: item.lastName,
  } as TItem extends Animal
    ? { animalName: string }
    : { humanFirstName: string; humanLastName: string };
};

getDisplayName<Animal>({
  name: "Dog",
});
getDisplayName<Human>({
  firstName: "Sabbir",
  lastName: "Hossain",
});
