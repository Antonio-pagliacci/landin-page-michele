import React from 'react'
import Container from '../components/base/Container'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-8">
      <Container>
        <div className="py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Dra. Michele Almeida — OAB/RJ 000000 — Rio de Janeiro - RJ
        </div>
      </Container>
    </footer>
  )
}

export default Footer
