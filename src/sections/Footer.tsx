import React from 'react'
import Container from '../components/base/Container'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-8">
      <Container>
        <div className="py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Michelle Faria — OAB RJ 205.639 — Brasil
        </div>
      </Container>
    </footer>
  )
}

export default Footer
