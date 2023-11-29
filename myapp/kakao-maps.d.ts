// This declaration file provides type information for the Kakao Maps SDK

declare namespace kakao {
  namespace maps {
    // Define types and classes you'll use here
    // For example:
    class Map {
      constructor(container: HTMLElement, options: MapOptions)
      setCenter(position: LatLng): void
      // Add other methods and properties you use
    }

    interface LatLng {
      getLat(): number
      getLng(): number
    }

    interface MapOptions {
      center: LatLng
      // Add other options you use
    }

    // Add other types and classes as needed
  }
}
t
