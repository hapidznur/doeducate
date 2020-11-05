export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-home',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Siswa']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Siswa',
        to: '/students',
        icon: 'cil-school'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Guru']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Guru',
        to: '/teachers',
        icon: 'cil-user'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Kelas']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Kelas',
        to: '/kelas',
        icon: 'cil-tags'
      }
    ]
  }
]