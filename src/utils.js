export const transformDataToNestedList = (data) => {
  const nestedMap = {};
  const rootItems = [];

  data.forEach((item) => {
    if (!item.parent) {
      rootItems.push(item);
    } else {
      if (!nestedMap[item.parent]) {
        nestedMap[item.parent] = [];
      }
      nestedMap[item.parent].push(item);
    }
  });

  const buildTree = (item) => {
    const children = nestedMap[item.id] || [];
    return { ...item, children: children.map(buildTree) };
  };

  return rootItems.map(buildTree);
};
