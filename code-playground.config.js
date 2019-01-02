module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-scroll-down-indicator-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {

    // compile server port
    port: 4000

  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <h1 class="h3 m-b-small">
          Coffeekraken s-scroll-down-indicator-component
        </h1>
        <p class="p m-b-bigger">
        Provide a simple fully customizable component to let the user know that he can scroll down for more content.
        </p>

        <s-scroll-down-indicator>
          <div class="scroll-down-indicator">
            Scroll down
          </div>
        </s-scroll-down-indicator>

        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dui accumsan, volutpat tortor non, mattis leo. Maecenas at vestibulum lacus. Nam egestas in nibh ac ornare. Vestibulum nisl leo, molestie vel tellus eu, tempus viverra nulla. Mauris sed congue quam, et dapibus nunc. Cras sed ex libero. Donec dictum id est eget maximus. Sed accumsan porta dui, sit amet molestie est rutrum quis. In ultrices vestibulum nisl ac laoreet. Nam leo ex, varius eget imperdiet ut, egestas id dolor. Vestibulum congue hendrerit augue. Integer commodo suscipit diam. Aenean lobortis metus neque, id pretium ligula malesuada sed. Curabitur dapibus semper vulputate.
        </p>

      `
    },
    css: {
      language: 'sass',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';

        @include s-setup(());
        @include s-init();
        @include s-classes();
        @include s-typography-classes();

        body {
          padding: s-space(bigger);
        }

        .scroll-down-indicator {
          background: s-color(secondary);
          color: white;
          @include s-depth(5);
          margin-bottom: s-space(big);
          padding: s-space(default);
        }
      `
    },
    js: {
      language: 'js',
      data: `
        import SScrollIndicatorComponent from './dist/index'
      `
    }
  }
}
