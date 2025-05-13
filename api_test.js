/**
 * API Testing: Identifying Defects in Product Data
 * This script tests the FakeStore API to detect defects in product data
 */

// Function to fetch products from the API
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    // Test 1: Verify server response code
    if (response.status !== 200) {
      console.error(
        `❌ HTTP Status Error: Expected 200, got ${response.status}`
      );
      return null;
    } else {
      console.log("✅ HTTP Status: 200 OK");
    }

    return await response.json();
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    return null;
  }
}

// Function to test each product for defects
function testProducts(products) {
  if (!products || !Array.isArray(products)) {
    console.error("❌ Invalid data format: Expected an array of products");
    return;
  }

  console.log(`Testing ${products.length} products for defects...`);

  const defects = [];

  products.forEach((product, index) => {
    const productDefects = [];

    // Test 2: Check that title is not empty
    if (!product.title || product.title.trim() === "") {
      productDefects.push("Empty title");
    }

    // Test 3: Check that price is not negative
    if (product.price === undefined || product.price < 0) {
      productDefects.push("Negative or missing price");
    }

    // Test 4: Check that rating.rate does not exceed 5
    if (
      !product.rating ||
      product.rating.rate === undefined ||
      product.rating.rate > 5
    ) {
      productDefects.push("Rating exceeds 5 or is missing");
    }

    // Add product to defects list if any issues found
    if (productDefects.length > 0) {
      defects.push({
        id: product.id,
        title: product.title || "Unknown",
        defects: productDefects,
      });
    }
  });

  return defects;
}

// Function to display test results
function displayResults(defects) {
  console.log("\n=== TEST RESULTS ===");

  if (defects.length === 0) {
    console.log("✅ No defects found in the product data.");
    return;
  }

  console.log(`❌ Found ${defects.length} products with defects:`);

  defects.forEach((product) => {
    console.log(`\nProduct ID: ${product.id}`);
    console.log(`Title: ${product.title}`);
    console.log(`Defects: ${product.defects.join(", ")}`);
  });
}

// Main function to run all tests
async function runTests() {
  console.log("Starting API Tests...");

  const products = await fetchProducts();
  if (!products) return;

  const defects = testProducts(products);
  displayResults(defects);
}

// Run the tests
runTests();
