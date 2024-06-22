export const importAll = (r) =>
  r.keys().map((fileName) => ({ id: fileName, imageSrc: r(fileName).default }))

export const Wedding = importAll(
  require.context("../public/images/real/wedding", false, /\.(png|jpe?g|svg)$/)
).filter((image) => image.id.startsWith("./"))
export const Real = importAll(
  require.context("../public/images/real/default/", false, /\.(png|jpe?g|svg)$/)
).filter((image) => image.id.startsWith("./"))
export const Bussiness = importAll(
  require.context(
    "../public/images/real/bussiness",
    false,
    /\.(png|jpe?g|svg)$/
  )
).filter((image) => image.id.startsWith("./"))
export const Birthday = importAll(
  require.context("../public/images/real/birthday", false, /\.(png|jpe?g|svg)$/)
).filter((image) => image.id.startsWith("./"))
export const Public = importAll(
  require.context("../public/images/real/publicc", false, /\.(png|jpe?g|svg)$/)
).filter((image) => image.id.startsWith("./"))
export const Steak = importAll(
  require.context("../public/images/real/steak", false, /\.(png|jpe?g|svg)$/)
).filter((image) => image.id.startsWith("./"))
export const Festival = importAll(
  require.context("../public/images/real/festival", false, /\.(png|jpe?g|svg)$/)
).filter((image) => image.id.startsWith("./"))
export const FingerFood = importAll(
  require.context(
    "../public/images/real/fingerFood",
    false,
    /\.(png|jpe?g|svg)$/
  )
).filter((image) => image.id.startsWith("./"))
