export const removeOblique = str => {
  //去掉多余的 /
  const rexStart = /\/+(?=\/.*)/g;
  return str.replace(rexStart, "");
};

export const getProcessEnv = () => {
  //环境变量
  const env = process && process.env ? process.env : {};
  //路由基础路径
  const baserouter = removeOblique(
    `/${window.appPortalPath || ""}/${env.baserouter || env.basepath || ""}`
  ).replace(/\/$/, "");
  //后台接口的基础路径
  const basepath = removeOblique(env.basepath || "").replace(/\/$/, "");
  //websocket基础路径
  const basesocket = removeOblique(env.basesocket || basepath || "").replace(
    /\/$/,
    ""
  );
  console.log({ env, basepath, baserouter, basesocket });
  return { env, basepath, baserouter, basesocket };
};

export default getProcessEnv;
