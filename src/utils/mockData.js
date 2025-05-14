const generateMockData = () => {
    const data = [];
    for (let i = 1; i <= 50; i++) {
      data.push({
        id: i,
        name: `Item ${i}`,
        email: `item${i}@example.com`,
        role: ['Admin', 'User', 'Manager'][i % 3],
        status: ['Active', 'Inactive'][i % 2],
        lastLogin: new Date(Date.now() - i * 1000000).toLocaleDateString(),
      });
    }
    return data;
};
  
export { generateMockData };