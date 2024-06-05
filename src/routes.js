import React, { Suspense, Fragment } from "react";

import { Routes, Route } from "react-router-dom";

const FilterRoutes = ({ routes = [] }) => {
  const roleRoutes = routes;

  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        {roleRoutes.map((route, i) => {
          const Layout = route.layout || Fragment;
          const Protection = route.protection || Fragment;
          const Check = route.check || Fragment;
          const Component = route.component;

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              element={
                <Check>
                  <Protection>
                    <Layout>
                      {route.routes ? (
                        renderSubRoutes(route.routes)
                      ) : (
                        <Component />
                      )}
                    </Layout>
                  </Protection>
                </Check>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

const renderSubRoutes = (routes = []) => {
  return (
    <Suspense>
      <Routes>
        {routes.map((route, i) => {
          const Layout = route.layout || Fragment;
          const Component = route.component;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

const renderRoutes = (routes = []) => {
  return <FilterRoutes routes={routes} />;
};

export { renderRoutes };
