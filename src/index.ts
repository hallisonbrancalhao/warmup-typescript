// Record

type Settings = Record<string, string>;

const settings: Settings = {
  theme: 'dark',
  version: '1.0.0',
};

// --------------------------------------------

type Offsets = Record<number, string>;

const offsets: Offsets = {
  1: 'one',
  '2': 'two',
};

// --------------------------------------------

interface Route {
    path: string;
    children?: Routes;
}

type Routes = Record<string, Route>;

const routes: Routes = {
    home: { path: '/' },
    about: { path: '/about' },
    products: {
        path: '/products',
        children: {
            list: { path: '/list' },
            details: { path: '/details' },
        },
    }
};

// --------------------------------------------

type Dictionary = Record<string, number | string | boolean>;

const dictionary: Dictionary = {
    name: 'John',
    age: 30,
    isStudent: true,
};

// --------------------------------------------

type Feature = "compileOnSabe" | "lintOnSave" | "lintOnCommit";

type Features = Record<Feature, boolean>;

// autocomplte
const features: Features = {
    compileOnSabe: true,
    lintOnSave: true,
    lintOnCommit: false,
};

features.compileOnSabe; // true

