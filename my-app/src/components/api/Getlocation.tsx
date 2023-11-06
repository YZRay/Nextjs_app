export async function Getlocation() {
  try {
    const response = await fetch(
      `https://api.mhnow.cc/api/monsterlocation/getlocation`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
}