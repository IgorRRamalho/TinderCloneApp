using TinderClone.Models;
using TinderClone.Repositories;

namespace TinderClone.Services
{
    public class UserService
    {
        private readonly UserRepository _userRepository;

        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<List<User>> GetAllAsync() => await _userRepository.GetAllAsync();

        public async Task<User> GetByIdAsync(string id) => await _userRepository.GetByIdAsync(id);

        public async Task CreateAsync(User user) => await _userRepository.CreateAsync(user);

        public async Task UpdateAsync(string id, User userIn) => await _userRepository.UpdateAsync(id, userIn);

        public async Task RemoveAsync(string id) => await _userRepository.RemoveAsync(id);
    }
}
