import { I18nextProvider } from 'react-i18next';
import AppRoutes from './router/routes';
import i18n from './config/i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <AppRoutes />
        </main>
      </div>
    </I18nextProvider>
  );
}

export default App;
