import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Switch, Route } from 'react-router-dom';
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import ProfilesList from './pages/profiles/ProfilesList'
import ProfilePage from './pages/profiles/ProfilePage'
import ProfileEditForm from './pages/profiles/ProfileEditForm'
import BookingCreateForm from './pages/bookings/BookingCreateForm';
import BookingsPage from './pages/bookings/BookingsPage';
import HomePage from './pages/home/HomePage';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/profiles" render={() => <ProfilesList message="No results found" />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact patg="/bookings" render={() => <BookingsPage />} />
          <Route exaxt path="/bookings/:id/create" render={() => <BookingCreateForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
