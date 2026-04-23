// Webflow Cloud builder imports @cloudflare/vite-plugin as a default import,
// but the package only ships named exports. This augmentation adds the missing
// default export so TypeScript doesn't resolve it as `never`.
declare module '@cloudflare/vite-plugin' {
  export default function cloudflarePlugin(pluginConfig?: object): import('vite').Plugin[];
}
