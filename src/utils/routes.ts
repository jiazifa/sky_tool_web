export declare interface IMenuModel {
  key?: string;
  path: string;
  title: string;
  icon: string;
  subMenu?: Array<IMenuItem>;
  component?: string;
}

export declare interface IMenuItem {
  key?: string;
  path: string;
  display: boolean;
  title: string;
  icon?: string;
  component?: string;
}

const menus: Array<IMenuModel> = [
  {
    path: "/app/dashboard",
    title: "看板",
    icon: "pie-chart",
    component: "DashboardComp"
  },
  {
    path: "/app/tool/todo",
    title: "待办",
    icon: "robot",
    component: "TodoComp"
  },
  {
    path: "/app/rss",
    icon: "switcher",
    title: "订阅",
    subMenu: [
      {
        title: "订阅源",
        display: true,
        path: "/app/rss/source",
        component: "RssComp"
      },
      {
        title: "订阅列表",
        display: true,
        path: "/app/rss/content",
        component: "RssContent"
      }
    ]
  },
  {
    path: "/app/file",
    icon: "file",
    title: "文件管理",
    subMenu: [
      {
        title: "文件上传",
        display: true,
        path: "/app/file/upload",
        component: "FileUploadComp"
      }
    ]
  },
  {
    path: "/app/blog",
    icon: "medium",
    title: "博客",
    subMenu: [
      {
        path: "/app/blog/backend",
        title: "后台",
        display: true,
        component: "BlogBackendComp"
      },
      {
        path: "/app/blog/frontend",
        title: "前台",
        display: true,
        component: "BlogComp"
      },
      {
        path: "/app/blog/edit",
        title: "编辑单个博客",
        display: false,
        component: "BlogEditComp"
      },
      {
        path: "/app/blog/preview",
        title: "博客预览",
        display: false,
        component: "BlogPreviewComp"
      }
    ]
  }
];
export default menus;
